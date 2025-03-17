import json
from pathlib import Path
from flask import request, current_app
from flask_restful import Resource
from common.custom_response import generate_response


class MarkdownView(Resource):

    def put(self):
        """
        编辑markdown
        """
        params = json.loads(request.data)
        file_key = params.get('file_key')
        data = params.get('data', {})
        if not data:
            return generate_response(code=400, msg="empty data", msgZH="数据为空，无法更新markdown")

        pdf_analysis_folder = current_app.config['PDF_ANALYSIS_FOLDER']
        pdf_dir = f"{current_app.static_folder}/{pdf_analysis_folder}"
        markdown_file_dir = ""
        for path_obj in Path(pdf_dir).iterdir():
            if path_obj.name.startswith(file_key):
                markdown_file_dir = path_obj
                break

        if markdown_file_dir and Path(markdown_file_dir).exists():
            for k, v in data.items():
                md_path = f"{markdown_file_dir}/{k}.md"
                if Path(md_path).exists():
                    with open(md_path, 'w', encoding="utf-8") as f:
                        f.write(v)

            full_content = ""
            # 获取所有md文件, 并排除full.md
            md_files = list(Path(markdown_file_dir).glob('*.md'))
            md_files = [file for file in md_files if file.stem != "full"]
            # 按文件名排序
            md_files.sort(key=lambda x: int(x.stem))
            for path_obj in md_files:
                if path_obj.is_file() and path_obj.suffix == ".md" and path_obj.stem != "full":
                    with open(path_obj, 'r', encoding="utf-8") as f:
                        full_content += f.read() + "\n"
            with open(f"{markdown_file_dir}/full.md", 'w', encoding="utf-8") as f:
                f.write(full_content)
        else:
            return generate_response(code=400, msg="Invalid file_key", msgZH="文件哈希错误")
        return generate_response(data={"success": True}, msg="success", msgZH="更新成功")
