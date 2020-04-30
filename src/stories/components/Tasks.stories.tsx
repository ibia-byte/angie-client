/*
import React from "react";
//import AddVolunteer from "@storybook/react/demo";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Formik } from "formik";
import * as Yup from "yup";
export default {
  title: "AddTask",
  component: "AddTask",
};
const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#0097A7",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#0066FF",
      main: "#0044FF",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#FFCC00",
    },
    // Used by getContrastText() to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    fontSize: 11,
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
const validationSchema = Yup.object({
  ministry: Yup.string().required("This Field Is Required"),
  taskName: Yup.string().required("This Field Is Required"),
  taskDescription: Yup.string().required("This Field Is Required"),
});

export const AddTaskForm = () => {
  const classes = useStyles();
  const [taskName, setTaskname] = React.useState("");
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTaskname(event.target.value as string);
  };
  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.root}>
        <Typography component="div">
          <h2>Add Task</h2>
          <br />
          <Formik
            initialValues={{
              ministry: "",
              taskName: "",
              taskDescription: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ handleSubmit, handleChange, values, errors }) => (
              <form onSubmit={handleSubmit}>
                <Grid container xs={6} spacing={2}>
                  <Grid item xs={6}>
                    Ministry:
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl variant="outlined" size="small">
                      <Box
                        boxShadow={1}
                        bgcolor="background.paper"
                        borderRadius={5}
                        width={200}
                        height={35}
                      >
                        <Select
                          name="ministry"
                          value={values.ministry}
                          onChange={handleChange}
                          fullWidth={true}
                        >
                          <MenuItem value={"Ushering"}>Ushering</MenuItem>
                          <MenuItem value={"Media"}>Media</MenuItem>
                          <MenuItem value={"Band"}>Band</MenuItem>
                          <MenuItem value={"Children"}>Children</MenuItem>
                        </Select>
                      </Box>
                      {errors.ministry}
                    </FormControl>
                  </Grid>{" "}
                  
                  <Grid item xs={6}>
                    Taskname:
                  </Grid>
                  <Grid item xs={6}>
                    <Box
                      boxShadow={1}
                      bgcolor="background.paper"
                      borderRadius={5}
                      width={200}
                    >
                      <TextField
                        name="taskName"
                        onChange={handleChange}
                        value={values.taskName}
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                        fullWidth={true}
                      />
                    </Box>
                    {errors.taskName}
                  </Grid>{" "}
                  
                  <Grid item xs={6}>
                    Task Description:
                  </Grid>
                  <Grid item xs={6}>
                    <Box
                      boxShadow={1}
                      bgcolor="background.paper"
                      borderRadius={5}
                      width={200}
                    >
                      <TextField
                        name="taskDescription"
                        onChange={handleChange}
                        value={values.taskDescription}
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                        fullWidth={true}
                      />
                    </Box>
                    {errors.taskDescription}
                  </Grid>{" "}
                  <Grid item xs={6}>
                    <Button type="submit" variant="contained" color="primary">
                      submit
                    </Button>
                  </Grid>
                  <Grid item xs={6}></Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </Typography>
      </Container>
    </ThemeProvider>
  );
};
*/
import React from 'react';
import AddTask from '@storybook/react/demo';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { Formik } from "formik";
import * as Yup from "yup";

export default {
  title: 'AddTask',
  component: AddTask,
};

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#0097A7',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    fontSize: 11,
  },
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const validationSchema = Yup.object({
  ministry: Yup.string().required("Required"),
  taskName: Yup.string().required("Required"),
  taskDescription: Yup.string().required("Required"),
});

export const AddTaskForm = () => {
  const classes = useStyles();
  const [ministry, setMinistry] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setMinistry(event.target.value as string);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.root}>
        <Typography component="div">
          <h2>Add tasks</h2>
          <br />
          <Formik
            initialValues={{ ministry: "", taskName: "", taskDescription: "" }}
            validationSchema={validationSchema}
            onSubmit={values => {
              console.log(values);
            }}
          >
            {({ handleSubmit, handleChange, values, errors }) => (
              <form onSubmit={handleSubmit}>
                <Grid container xs={6} spacing={2}>
                  <Grid item xs={6}>Ministry:</Grid>
                  <Grid item xs={6}>
                    <FormControl variant="outlined" size="small">
                      <Box boxShadow={1} bgcolor="background.paper" borderRadius={5} width={200} height={35}>
                        <Select
                          name="ministry"
                          value={values.ministry}
                          onChange={handleChange}
                          fullWidth={true}
                        >
                          <MenuItem value={"Kids"}>Kids</MenuItem>
                          <MenuItem value={"Media"}>Media</MenuItem>
                          <MenuItem value={"Band"}>Band</MenuItem>
                        </Select>
                      </Box>
                      {errors.ministry}
                    </FormControl>
                  </Grid>

                  <Grid item xs={6}>Task name:</Grid>
                  <Grid item xs={6}><Box boxShadow={1} bgcolor="background.paper" borderRadius={5} width={200}><TextField name="taskName" onChange={handleChange} value={values.taskName} id="outlined-basic" variant="outlined" inputProps={{ fontSize: 8 }} size="small" fullWidth={true} /></Box>
                    {errors.taskName}</Grid>

                  <Grid item xs={6}>Task description:</Grid>
                  <Grid item xs={6}><Box boxShadow={1} bgcolor="background.paper" borderRadius={5} width={200}><TextField name="taskDescription" onChange={handleChange} value={values.taskDescription} id="outlined-basic" variant="outlined" size="small" fullWidth={true} /></Box>
                    {errors.taskDescription}</Grid>
                  <Grid item xs={6}><Button type="submit" variant="contained" color="primary">Add</Button></Grid>
                  <Grid item xs={6}></Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </Typography>
      </Container>
    </ThemeProvider>
  );
}

