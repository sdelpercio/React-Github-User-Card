import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`
const StyledHeadline = styled.h3`
  margin: 0 auto;
  width: 80%;
  text-align: center;
`
const StyledInput = styled.input`
    width: 300px;
    padding: 16px 32px;
    margin: 1% 0;
    border: none;
    border-radius: 10px;
`
const StyledButton = styled.button`
    padding: 10px 20px;
    background-color: white;
    border: none;
    border-radius: 10px;
    color: black;

    &:hover {
        background-image: linear-gradient( 178deg,  rgba(201,234,252,0.51) 14.9%, rgba(139,192,216,0.73) 80% );
        cursor: pointer;
    }
`

class SearchForm extends React.Component {

    handleChange = event => {
        this.props.handleChanges(event)
    };

    render() {
        return (
            <StyledDiv>
                <StyledHeadline>Display your own Github profile and followers!</StyledHeadline>
                <StyledInput
                    type="text"
                    value={this.props.userInput}
                    onChange={this.handleChange}
                    placeholder='enter a username'
                />
                <StyledButton onClick={this.props.fetchInfo} >Go</StyledButton>
                {this.props.userError && <p>{this.props.userError}</p>}
            </StyledDiv>
        )
    }
}
export default SearchForm;