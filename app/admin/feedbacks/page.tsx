//app/admin/feedback/page.tsx

import pool from "@/lib/db"

type Feedback = {
    id: number,
    name: string,
    email: string,
    message: string,
    created_at: string
}

export default async function FeedBackViewer (){
    const result = await pool.query (
        `SELECT * FROM feedbacK`
    );

    const feedbacks  = result.rows as Feedback[];

    return (
        <div style={{padding : '10px'}}>
            <h1>ALL THE FEEDBACK</h1>
            { feedbacks.length === 0 ? (
                <p>No Feedback Available Yet</p>
            ):(
                <ul>
                    {feedbacks.map((fb)=>(
                        <li key={fb.id} style={{marginBottom : "2rem"}}>
                            <strong>{fb.name}</strong> ({fb.email}) <br/>
                            <small>{new Date(fb.created_at).toLocaleString()}</small>
                            <p>Feedback : {fb.message}</p>
                            <hr/>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}