import React from 'react'

const Form = () => {
    return (<div>
        <p>
            <label for="category">Category </label>
            <select id="category">
                <option value>Please choose a category...</option>
                <option value>Dick pics</option>
                <option value>Jackass</option>
                <option value>Just being a dick</option>
            </select>
        </p>
        <p>
            <label for="rank">Rank</label>
            <select id="rank">
                <option value>Please choose a degree of burn...</option>
                <option value>Whimsical</option>
                <option value>Gonna need some Aloe Vera</option>
                <option value>Manhood ruined</option>
            </select>
        </p>
        <p><button type="submit">Submit</button></p>
    </div>)
}

export default Form