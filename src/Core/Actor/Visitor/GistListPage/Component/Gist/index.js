import React from 'react';
import { GistAuthor, GistDate, GistDescription, GistTitle } from './index.styled';

/**
 * @param GistDTO gistDto
 */
const Gist = ({gistDto}) => {
  return <div>
    <h2><GistTitle to={ `/gist/${ gistDto.name }` }>{ gistDto.name }</GistTitle></h2>
    <GistDate>{ gistDto.createdAt }</GistDate> <GistAuthor>{ gistDto.owner }</GistAuthor>
    <GistDescription>{ gistDto.description }</GistDescription>
  </div>
}

export default Gist;
