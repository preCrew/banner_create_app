import React, { useState } from 'react';
import { InputField } from './style'
import styled from "styled-components";

interface borderWidthBt {

}


export default function borderWidthBt() {
    return (
        <InputField
            id="borderw"
            type="number"
            name="username"
            value="0"
            min="0"
        />
    );
}
