import React, { Component } from "react";
import Layout from "../components/layout/MyLayout";
import { Connect } from "../utils/Connect.js";
import CollectsList from ".././components/pages/CollectsList";
import axios from "axios";
import { type } from "os";

interface IProps {
    router: object;
    shows: [];
    homeStore: object;
    collects: any;
    images?: any[];
    getAllCollects: Function;
}

interface IState {
    loading: boolean;
    loadingMore: boolean;
    hasMore: boolean;
    active: string;
}

class Collects extends Component<IProps, IState> {
    public state = {
        loading: true,
        active: "hot", // hot or new
        loadingMore: false,
        hasMore: true
    };

    async componentDidMount() {
        await this.props.getAllCollects();
    }

    public changeActive(active: string) {
        this.setState({
            active
        });
    }

    render() {
        const { collects } = this.props;

        return (
            <Layout>
                <div>
                    <div className="collects">
                        <div className="collects-left">
                            <CollectsList collects={collects || []} />
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Connect(["collects"], ["getAllCollects"], Collects);
