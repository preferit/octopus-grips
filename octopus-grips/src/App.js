import React, { useState, useRef } from 'react'
import { ThemeProvider } from 'styled-components'
import { AppStyle, AppTheme } from './themesAndStyles'
import FocusLock from 'react-focus-lock'
import { useOnClickOutside } from './hooks/hooks'
import { Burger } from './components/molecules'
import { Menu } from './components/compounds'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"
import { Home } from './components/organisms'
import { About } from './components/organisms'
import { Contact } from './components/organisms'
import { Products } from './components/organisms'
import { Cart } from './components/organisms'

function App() {
    const [open, setOpen] = useState(false);
    const node = useRef();
    const menuId = "main-menu";
    useOnClickOutside(node, () => setOpen(false));
    
    return (
        <div>
            <Router>
                <ThemeProvider theme={AppTheme}>
                    <>
                        <AppStyle />
                        <div ref={node}>
                
                            <FocusLock disabled={!open}>
                                <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                                <Menu open={open} setOpen={setOpen} id={menuId} />
                            </FocusLock>
                        </div>
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/products">
                                <Products />
                            </Route>
                            <Route path="/contact">
                                <Contact />
                            </Route>
                            <Route path="/cart">
                                <Cart />
                            </Route>
                        </Switch>
                    </>
                </ThemeProvider>
            </Router>
        </div>

    );
}

export default App;
