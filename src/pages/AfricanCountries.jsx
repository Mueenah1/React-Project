import React, {useState} from 'react'
import {useContext} from 'react'
import {ThemeContext} from './ThemeContext'

function AfricanContries(){
    const [theme, toggleTheme] = useContext(ThemeContext)

    const [region, setRegion] = useState({
        westAfrica : ['Nigeria'],
        eastAfrica : ['Madagascar'],
        centralAfrica : ['Cameroon'],
        northAfrica : ['Algeria'],
        southAfrica : ['Mozambique']
    })
    const [input, setInput] = useState({
        westAfrica : '',
        eastAfrica : '',
        centralAfrica : '',
        northAfrica : '',
        southAfrica : ''
    })

    function handleInput(regionName, inputValue){
        setInput(prev => ({...prev, [regionName] : inputValue}))
    }

    function addCountry(regionName){
        const countryName = input[regionName]
        if(regionName.trim() !== ''){
            setRegion(prev => ({...prev, [regionName] : [...prev[regionName], countryName]}))
            setInput(prev => ({...prev, [regionName] : ''}))
        }
    }

    function removeCountry(regionName, index){
        setRegion(prev => ({...prev, [regionName] : prev[regionName].filter((_, i) => i !== index)}))
    }





    return(
        <div>
            <h3>The current theme is {theme}</h3>
            <button onClick={toggleTheme}>Change Theme</button>
            <h1>AFRICA</h1>
            <p>Countries within Five Regions</p>
            <div className='west' >
                <h2>West Africa</h2>
                <ol>
                    {
                        region.westAfrica.map(
                            (country, index) => (<li key={index} onClick={() => removeCountry('westAfrica', index)} >{country}</li>)
                        )
                    }
                </ol>
                <input 
                    type="text" 
                    value={input.westAfrica} 
                    onChange={(e) => handleInput('westAfrica', e.target.value)} 
                    placeholder='Add a West African Country'/>
                <button onClick={() =>addCountry('westAfrica')}>Add</button>
            </div>
            <div className='east' >
                <h2>East Africa</h2>
                <ol>
                    {
                        region.eastAfrica.map((country, index) => (<li key ={index} onClick = {() => removeCountry('eastAfrica', index )}>{country}</li>))
                    }
                </ol>
                <input 
                    type="text"
                    value = {input.eastAfrica}
                    onChange ={(e) => handleInput('eastAfrica', e.target.value)} 
                    placeholder='Add an East African Country'/>
                <button onClick = {() => addCountry('eastAfrica')}>Add</button>
            </div>
            <div className='central'>
                <h2>Central Africa</h2>
                <ol>
                    {
                        region.centralAfrica.map((country, index) => (<li key ={index} onClick = {() => removeCountry('centralAfrica', index )}>{country}</li>))
                    }
                </ol>
                <input 
                    type="text"
                    value = {input.centralAfrica}
                    onChange ={(e) => handleInput('centralAfrica', e.target.value)} 
                    placeholder='Add a Central African Country'/>
                <button onClick = {() => addCountry('centralAfrica')}>Add</button>
            </div>
            <div className='north'>
                <h2>North Africa</h2>
                <ol>
                    {
                        region.northAfrica.map((country, index) => (<li key ={index} onClick = {() => removeCountry('northAfrica', index )}>{country}</li>))
                    }
                </ol>
                <input 
                    type="text"
                    value = {input.northAfrica}
                    onChange ={(e) => handleInput('northAfrica', e.target.value)} 
                    placeholder='Add a North African Country'/>
                <button onClick = {() => addCountry('northAfrica')}>Add</button>
            </div>
            <div className='south'>
                <h2>South Africa</h2>
                <ol>
                    {
                        region.southAfrica.map((country, index) => (<li key ={index} onClick = {() => removeCountry('southAfrica', index )}>{country}</li>))
                    }
                </ol>
                <input 
                    type="text"
                    value = {input.southAfrica}
                    onChange ={(e) => handleInput('southAfrica', e.target.value)} 
                    placeholder='Add a South African Country'/>
                <button onClick = {() => addCountry('southAfrica')}>Add</button>
            </div>
        </div>
    )
}

export default AfricanContries