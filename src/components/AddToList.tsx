import React, {useState} from 'react'
import {IState as Props} from '../App'

interface IProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
}

const AddToList: React.FC<IProps> = ({people, setPeople}) => {
    const [input, setInput] = useState({
        name: '',
        age: '',
        url: '',
        note: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const handleClick = (): void => {
        if (
            !input.name || !input.age || !input.url
        ) {
             return
        } 
        setPeople([
            ...people,
            {
                name: input.name,
                age: parseFloat(input.age),
                url: input.url,
                note: input.note
            }
        ])
        setInput({
            name: '',
            age: '',
            url: '',
            note: ''
        })
    }
    return (
        <div className="AddToList">
            <input onChange={handleChange} name="name" value={input.name} type="text" placeholder='Name' className="AddToList-input" />
            <input onChange={handleChange} name="age" value={input.age} type="text" placeholder='Age' className="AddToList-input" />
            <input onChange={handleChange} name="url" value={input.url} type="text" placeholder='Image url' className="AddToList-input" />
            <textarea onChange={handleChange} value={input.note} placeholder='Notes' className="AddToList-input" />
            <button
            className="AddToList-btn"
            onClick={handleClick}
            >
                add to list
            </button>
        </div>
    )
}

export default AddToList