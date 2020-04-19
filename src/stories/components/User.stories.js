
import React from "react";
import { storiesOf } from "@storybook/react";
import { grommet, Box, Button, Form, Text, Grommet, TextInput } from "grommet";
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';



const styles = {
    button:  {
        width: "50px",
        margin: 8,
        background:"#0097A7"
    }
};

const LabelTextInput = () => (
    
   <Grommet theme={grommet}>
        <Box align="center" pad="large">
            <Form>
                <h2>User Login</h2>
                <TextInput
                    name="username" 
                    label="username" 
                    placeholder="username" 
                    autoComplete="off"
                    margin="normal"
                    required
                />
                    <br/>
                <TextInput
                    type='password'
                    name='password'
                    label='Password'
                    autoComplete="off"
                    margin="normal"
                    placeholder="password"
                    required
                />
                <br/>
                <Button
                variant="contained"
                color="normal"
                primary={false}
                style={styles.button}
                onClick={this.continue}
                type="submit"
              >Login</Button>
                <Text margin={{ left: "small" }} size="small"> 
        </Text>
            </Form>
        </Box>
    </Grommet>
    
);
            
        
    


storiesOf("Form", module).add("User Login", () => <LabelTextInput />);

