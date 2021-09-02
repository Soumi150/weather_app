function CityInput({Input, handleChange, handlekeypress}){
return(
    <input className="search" type="text" name="cityname" value={Input} onChange={handleChange} onKeyPress={e => e.key === 'Enter' && handlekeypress()} ></input>
)
}
export default CityInput;