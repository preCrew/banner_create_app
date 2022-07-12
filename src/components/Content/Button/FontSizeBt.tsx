import React, { useState } from 'react';
import { InputField } from './style'
import styled from "styled-components";

interface fontSizeBt {

}

export default function fontSizeBt() {

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
