import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import { TextField } from '@mui/material';
import './Sort.css'
function Sort() {
    const [value, setValue] = useState([0, 1000000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (index) => (event) => {
        const newValue = [...value];
        newValue[index] = event.target.value === '' ? 0 : Number(event.target.value);
        setValue(newValue);
    };

    const valueLabelFormat = (value) => {
        return `${value.toLocaleString()}đ`;
    };

    return (
        <div>
            <h2 className='Bigtitle'>Theo mức giá</h2>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valueLabelFormat}
                valueLabelFormat={valueLabelFormat}
                min={0}
                max={1000000}
            />
            <div style={{ display: `flex` }}>
                <TextField style={{ marginRight: 15 }}
                    label="Min"
                    variant="outlined"
                    value={value[0]}
                    onChange={handleInputChange(0)}
                    type="number"
                />
                <TextField
                    label="Max"
                    variant="outlined"
                    value={value[1]}
                    onChange={handleInputChange(1)}
                    type="number"
                />
            </div>
            <div>
                <button className='handleSortPrice'>Lọc giá</button>
            </div>
            <hr />
        </div>
    );
}
export default Sort;






