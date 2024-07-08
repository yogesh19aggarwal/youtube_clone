import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import {Search} from '@mui/icons-material';
// import Search from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchterm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(searchTerm){
      navigate(`/search/${searchTerm}`);
      setSearchterm('');
    }
  }

  return (
    <Paper component="form" onSubmit={handleSubmit} sx={{borderRadius: 20,border: '1px solid #e3e3e3',pl: 2, pr: 2,boxShadow: 'none'}}>
        <input className='search-bar' placeholder='Search...' value={searchTerm} onChange={(e)=>setSearchterm(e.target.value)}></input>
        <IconButton type="submit" sx={{p: '10px', color: 'red'}}><Search /></IconButton>
    </Paper>
  );
}

export default SearchBar;