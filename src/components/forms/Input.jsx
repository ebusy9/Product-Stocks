/**
 * @param {string} placeholder 
 * @param {string} value 
 * @param {callback} onChange 
 * @returns {JSX.Element}
 */

function Input({ placeholder, value, onChange }) {

    return <div className="search-input-wrapper">
        <input
            type="text"
            name="search"
            id="search-input"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
}

export default Input