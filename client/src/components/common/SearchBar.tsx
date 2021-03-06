import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navigate } from 'react-router-dom';

interface SearchBarProps {
    setSearchKeyword: Function
    defaultValue: string
    inSearchPage: boolean
}
 
interface SearchBarState {
    submitted: boolean
    keyword: string
    setSearchKeyword: Function
    inSearchPage: boolean
}
 
class SearchBar extends React.Component<SearchBarProps, SearchBarState> {

    constructor(props: SearchBarProps) {
        super(props);
        this.state = {
            submitted: false,
            keyword: props.defaultValue,
            setSearchKeyword: props.setSearchKeyword,
            inSearchPage: props.inSearchPage,
        };
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.state.setSearchKeyword(this.state.keyword);
        this.setState({submitted: true});
    }

    onChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({keyword: event.target.value});
    } 

    render() { 
        return (
            <div className="search-bar">
                {this.state.submitted && !this.state.inSearchPage ? <Navigate to="/search" /> : <></>}
                <form onSubmit={this.handleSubmit}>
                    <input type="search" name="search" id="search" onChange={this.onChange} value={this.state.keyword} />
                    <button type="submit" id="search-btn">
                        <FontAwesomeIcon icon={["fas", "magnifying-glass"]} />
                    </button>
                </form>
            </div>
        );
    }
}
 
export default SearchBar;