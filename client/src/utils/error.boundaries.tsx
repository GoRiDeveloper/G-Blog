"use client";
import React from "react";
import type { Props, State } from "@/types";

export class ErrorBoundary extends React.Component<Props> {
    readonly state: State;

    constructor(props: Props) {
        super(props);
        this.state = { hasError: false, resetCondition: props.resetCondition };
    };

    static getDerivedStateFromError(error: Error) {
        console.error(error);
        return { hasError: true };
    };

    static getDerivedStateFromProps(props: Props, state: State) {
        if (props.resetCondition !== state.resetCondition)
            return { hasError: false, resetCondition: props.resetCondition };

        return null;
    };

    render() {
        if (this.state.hasError || this.props.error)
            return this.props.fallBackComponent;
        return this.props.children;
    };
};