import { Component, type ChangeEvent, type FormEvent } from "react";

type State = {
    color: string;
    submittedColor?: string;
};

export default class Ex2 extends Component<object, State> {
    state: State = {
        color: "#000000",
        submittedColor: undefined,
    };

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({ color: e.target.value });
    };

    handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.setState({ submittedColor: this.state.color });
    };

    handleReset = () => {
        this.setState({ color: "#000000", submittedColor: undefined });
    };

    render() {
        const { color, submittedColor } = this.state;

        return (
            <div style={{ maxWidth: 360, margin: "40px auto", fontFamily: "system-ui" }}>
                <h1 style={{ fontSize: 48, margin: 0, lineHeight: 1.1 }}>
                    Color{submittedColor ? `: ${submittedColor}` : ""}
                </h1>

                <h2 style={{ marginTop: 16, marginBottom: 8 }}>Form</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="color" style={{ display: "block", marginBottom: 8 }}>
                        Màu sắc
                    </label>

                    <input
                        id="color"
                        name="color"
                        type="color"
                        value={color}
                        onChange={this.handleChange}
                        style={{
                            width: 64,
                            height: 36,
                            border: "1px solid #999",
                            borderRadius: 4,
                            display: "block",
                        }}
                    />

                    <button
                        type="submit"
                        style={{ marginTop: 12, padding: "6px 12px", border: "1px solid #444", background: "#f7f7f7" }}
                    >
                        Submit
                    </button>

                    <button
                        type="button"
                        onClick={this.handleReset}
                        style={{ marginTop: 12, marginLeft: 8, padding: "6px 12px", border: "1px solid #aaa", background: "#fff" }}
                    >
                        Reset
                    </button>
                </form>
            </div>
        );
    }
}