/**
 * @param {string} checked 
 * @param {string} label
 * @param {(s: string) => void} onChange 
 * @param {string} id
 * @returns {JSX.Element}
 */

function Checkbox({ checked, onChange, label, id }) {

    return <div className="checkbox-wrapper">
        <input
            type="checkbox"
            name="isInStock"
            id={id}
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
        />
        <label htmlFor={id}>{label}</label>
    </div>
}

export default Checkbox