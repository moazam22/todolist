// import {useState, useEffect} from 'react';
// import {
// 	TextField,
// 	Button,
// 	Table,
// 	TableBody,
// 	TableCell,
// 	tableCellClasses,
// 	TableContainer,
// 	TableHead,
// 	TableRow,
// 	Paper
// } from '@mui/material';
// import { styled } from '@mui/material/styles';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));








function Todos(props){
	console.log(props);
	return(
		<h1>{props.listId}</h1>
	)
}

export default Todos;