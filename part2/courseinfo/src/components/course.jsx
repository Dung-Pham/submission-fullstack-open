export const Part = ({part}) =>{
    
    return (
        <p>{part.name} {part.exercises}</p>
    )
}

export const Course = ({course}) =>{

    return (
        <>
            <h1>{course.name}</h1>
            {course.parts.map(part => <Part part = {part}/>)}
        </>
    )
}


