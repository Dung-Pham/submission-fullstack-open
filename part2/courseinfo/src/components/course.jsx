export const Total = ({parts}) =>{
    const total = parts.reduce((sum, e) => sum + e.exercises, 0)
    return <p><b>total of {total} exercises</b></p>
}
export const Part = ({part}) => <p>{part.name} {part.exercises}</p>

export const Course = ({course}) =>{

    return (
        <>
            <h1>{course.name}</h1>
            {course.parts.map(part => <Part part = {part}/>)}
            <Total parts={course.parts}/>
        </>
    )
}


