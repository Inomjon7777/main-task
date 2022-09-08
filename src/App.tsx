import React from "react";

import { Component } from "react";
import NavBar from "./components/navbar";
import Content from "./components/content";
import { IContextValue, SuperContext } from "./context/context";
import { RandomColor } from "./components/random/random";
import Timer from "./components/timer/timer";
export type Mode = "dark" | "light";
export interface Profile {
  username: string;
  email: string;
}

interface AppState {
  profile: Profile;
}

interface AppProps {
  mode: Mode;
  onChangeMode: (mode: Mode) => void;
}

class App extends Component<AppProps, AppState> {
  state = {
    profile: {
      username: "arslonbekXX",
      email: "ars@domain.com",
    },
  } as AppState;

  componentDidUpdate(prevProps: AppProps, prevState: AppState) {
    if (prevProps.mode !== this.props.mode) {
      console.log(`change mode for ${this.props.mode}`);
    }
  }

  render() {
    const value: IContextValue = {
      ...this.state,
      ...this.props,
    };

    return (
      <SuperContext.Provider value={value}>
        {/* <NavBar /> */}
        <RandomColor />
        <Timer />
        {/* <Content onChangeMode={this.props.onChangeMode} /> */}
      </SuperContext.Provider>
    );
  }
}

export default App;
