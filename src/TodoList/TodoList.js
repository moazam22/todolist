import { useState, useEffect } from "react";
import {
	TextField,
	Button,
	Table,
	TableBody,
	TableCell,
	tableCellClasses,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from "@mui/material";
import Todos from "./Todos";
import { styled } from "@mui/material/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import axios from "axios";
import DateFnsUtils from "@date-io/date-fns";
// import {DatePicker, KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DatePicker from "react-datepicker";
import { useSelector, useDispatch } from "react-redux";
import { createList, editList, deleteList } from "../redux/list/list.actions";

// sagaMiddleware.run(mySaga);

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	"&:nth-of-type(odd)": {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	"&:last-child td, &:last-child th": {
		border: 0,
	},
}));

function TodoList() {
	const [input, setInput] = useState("");
	const [data, setData] = useState([]);
	const [isEdit, setIsEdit] = useState(false);
	const [selectedTodo, setSelectedTodo] = useState("");
	const [date, setDate] = useState("");
	const lists = useSelector((state) => state.lists);
	const dispatch = useDispatch();

	useEffect(() => {
		// fetchData();
	}, []);

	// async function fetchData(){
	// 	try{
	// 		let lists = await axios.get('http://localhost:3001/lists');
	// 		setData(lists.data.data.listData);
	// 	}catch(e){
	// 			console.log("Error", e);
	// 	}
	// }

	const onAdd = async () => {
		if (!isEdit) {
			// let newList = await axios.post("http://localhost:3001/lists", {
			// 	name: input,
			// 	todo: [],
			// });
			// setData([...data, newList.data]);
			dispatch(
				createList({
					_id: Math.ceil(Math.random() * 100),
					name: input,
					todos: [],
				})
			);
			setInput("");
		} else {
			// let newList = await axios.put(`http://localhost:3001/lists/${isEdit}`,{
			// 	name: input,
			// 	todo: []
			// })
			// setData(newList.data.data);
			dispatch(
				editList({
					_id: isEdit,
					name: input,
					todos: lists.find((list) => list._id === isEdit).todos,
				})
			);
			setIsEdit(false);
			setInput("");
		}
	};

	const onEdit = (e, id) => {
		e.stopPropagation();
		let list = lists.filter((list) => list._id === id)[0];
		setInput(list.name);
		setIsEdit(id);
	};

	const onDelete = async (e, id) => {
		e.stopPropagation();
		try {
			// let resp = await axios.delete(`http://localhost:3001/lists/delete/${id}`);
			// setData(resp.data.data);
			dispatch(deleteList(id));
		} catch (e) {
			console.log("Error: ", e);
		}
	};

	const onDateChange = async (date, dateString) => {
		setDate(dateString);
	};

	function createData(id, Name, Edit, Delete) {
		const editButton = (
			<Button onClick={(e) => onEdit(e, id)}>
				<EditIcon />
			</Button>
		);
		const deleteButton = (
			<Button onClick={(e) => onDelete(e, id)}>
				<DeleteIcon style={{ color: "red" }} />
			</Button>
		);
		return { Name, editButton, deleteButton, id };
	}

	const rows =
		lists.length &&
		lists.map((tableData) => createData(tableData._id, tableData.name));

	const showTodos = (id) => {
		console.log("id", id);
		setSelectedTodo(id);
	};

	return (
		<>
			<center>
				<h1>Todo List</h1>
			</center>
			<div style={{ display: "flex" }}>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<div style={{ display: "inline", padding: "1em" }}>
						<TextField
							style={{
								marginRight: "1em",
								boxShadow: "0 1px 6px rgba(32,33,36,.28)",
							}}
							id="outlined-basic"
							label="Enter Name of list"
							value={input}
							variant="outlined"
							size="small"
							onChange={(event) => setInput(event.target.value)}
						/>
						<Button style={{}} variant="contained" onClick={onAdd}>
							Add
						</Button>
					</div>
					<br />
					<br />
					<div style={{ padding: "1em" }}>
						<TableContainer
							sx={{
								maxWidth: "25em",
								boxShadow: "0 1px 15px rgba(32,33,36,.28)",
							}}
							component={Paper}
						>
							<Table aria-label="customized table">
								<TableHead>
									<TableRow>
										<StyledTableCell align="right">Name</StyledTableCell>
										<StyledTableCell align="right">Edit</StyledTableCell>
										<StyledTableCell align="right">Delete</StyledTableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{!!rows &&
										rows.length &&
										rows.map((row) => (
											<StyledTableRow
												style={{ cursor: "pointer" }}
												key={row.Name}
												onClick={() => showTodos(row.id)}
											>
												<StyledTableCell component="th" scope="row">
													{row.Name}
												</StyledTableCell>
												<StyledTableCell align="right">
													{row.editButton}
												</StyledTableCell>
												<StyledTableCell align="right">
													{row.deleteButton}
												</StyledTableCell>
											</StyledTableRow>
										))}
								</TableBody>
							</Table>
						</TableContainer>
					</div>
				</div>
				{!!selectedTodo && (
					<div style={{ flex: "1", display: "flex", flexDirection: "column" }}>
						<div style={{ display: "inline", padding: "1em" }}>
							<TextField
								style={{
									marginRight: "1em",
									boxShadow: "0 1px 6px rgba(32,33,36,.28)",
								}}
								id="outlined-basic"
								label="Enter Name of todo"
								// value = {input}
								variant="outlined"
								size="small"
								// onChange = {(event)=>setInput(event.target.value)}
							/>
							<Button variant="contained" onClick={() => alert("hi")}>
								Add Todo
							</Button>
						</div>
						<br />
						<div style={{ padding: "1em" }}>
							<Todos listId={data.filter((list) => list.id === selectedTodo)} />
						</div>
					</div>
				)}
			</div>
		</>
	);
}

export default TodoList;

// <MuiPickersUtilsProvider utils={DateFnsUtils}>
// <KeyboardDatePicker
//     autoOk
//     variant="inline"
//     inputVariant="outlined"
//     label="Due Date"
//     format="MM/dd/yyyy"
//     value={date}
//     onChange={(date,dateString) => onDateChange(date,dateString)}
// />
// <DatePicker/>
// </MuiPickersUtilsProvider>
