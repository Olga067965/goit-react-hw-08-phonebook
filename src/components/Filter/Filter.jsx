import React from 'react';
import style from'./Filter.module.css'
import { useDispatch} from 'react-redux';
import { setContactFilter } from 'redux/contacts/filterSlice';


const Filter = () => {

  const dispatch = useDispatch();

  const handleFilterChange = (e) => dispatch(setContactFilter(e.target.value))

  return (
    <label className={style.label} >
        Find contacts by name
        <input onChange={handleFilterChange}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
        </label>
  )
}

export default Filter;
