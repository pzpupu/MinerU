import sqlite3

if __name__ == "__main__":
    db_path = f'/root/MinerU/projects/web_demo/web_demo/config/init.db'
    # 连接sqlite数据库
     # 连接到SQLite数据库
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    # 删除analysis_task、analysis_pdf表中所有数据
    cursor.execute("DELETE FROM analysis_task;")
    cursor.execute("DELETE FROM analysis_pdf;")
    conn.commit()
        
    # 从1到100
    for i in range(1, 100):
        cursor.execute(f"INSERT INTO analysis_task (id,file_key, file_name, task_type, is_ocr, status, analysis_pdf_id, create_date, update_date) VALUES ( {i}, '{i}', '{i}.pdf', 'pdf',  false, 1, {i}, '2025-03-18 10:00:00', '2025-03-18 10:00:00');")
        cursor.execute(f"INSERT INTO analysis_pdf (id, file_name, file_url, file_path, status, bbox_info, md_link_list, full_md_link, create_date, update_date) VALUES ( {i}, '{i}.pdf', null, '/static/upload_pdf/{i}.pdf', 1, '[]', '[]', '/api/v2/analysis/pdf_md?filename=full.md&as_attachment=False&pdf={i}.pdf', '2025-03-18 10:00:00', '2025-03-18 10:00:00');")
        conn.commit()


    # 关闭连接
    conn.close()
