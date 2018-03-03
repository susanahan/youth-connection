import React from 'react';

const Jobs = ({bronx, ny, brooklyn, queens, manhattan}) =>{

    return(
        <div id="container-jobs">
            <h1>Bronx Jobs and Internships</h1>
            <div className="bronx">
                {bronx.map(job=>(
                    <div className='jobPost'>
                    <p>
                        {job.agency}
                    </p>
                    <p>
                        {job.address}
                    </p>
                    <p>
                        {job.contact_number}
                    </p><br/>
                    </div>
                ))}
            </div>
            <h1>New York Jobs and Internships</h1>
            <div className="NY">
                {ny.map(job=>(
                    <div className='jobPost'>
                    <p>
                        {job.agency}
                    </p>
                    <p>
                        {job.address}
                    </p>
                    <p>
                        {job.contact_number}
                    </p><br/>
                    </div>
                ))}
            </div>
            <h1>Manhattan Jobs and Internships</h1>
            <div className="manhattan">
                {manhattan.map(job=>(
                    <div className='jobPost'>
                    <p>
                        {job.agency}
                    </p>
                    <p>
                        {job.address}
                    </p>
                    <p>
                        {job.contact_number}
                    </p><br/>
                    </div>
                ))}
            </div>
            <h1>Queens Jobs and Internships</h1>
            <div className="queens">
                {queens.map(job=>(
                    <div className='jobPost'>
                    <p>
                        {job.agency}
                    </p>
                    <p>
                        {job.address}
                    </p>
                    <p>
                        {job.contact_number}
                    </p><br/>
                    </div>
                ))}
            </div>
            <h1>Brooklyn Jobs and Internships</h1>
            <div className="brooklyn">
                {brooklyn.map(job=>(
                    <div className='jobPost'>
                    <p>
                        {job.agency}
                    </p>
                    <p>
                        {job.address}
                    </p>
                    <p>
                        {job.contact_number}
                    </p><br/>
                    </div>
                ))}
            </div>
                        
        </div>
    )
}

export default Jobs;