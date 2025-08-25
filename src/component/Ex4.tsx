import { Component, type ChangeEvent, type FormEvent } from "react";

interface State {
    progress: number;
    submittedProgress?: number;
}

export default class ProgressForm extends Component<object, State> {
    state: State = {
        progress: 0,
        submittedProgress: undefined,
    };

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({ progress: Number(e.target.value) });
    };

    handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // chặn reload
        this.setState({ submittedProgress: this.state.progress });
    };

    render() {
        const { progress, submittedProgress } = this.state;
        const label =
            submittedProgress === undefined
                ? "Tiến độ hoàn thành: %"
                : `Tiến độ hoàn thành: ${submittedProgress} %`;

        return (
            <div style={{ margin: 30, fontSize: 18 }}>
                <form
                    onSubmit={this.handleSubmit}
                    style={{ border: "1px solid #ccc", padding: 20, width: 360 }}
                >
                    <div style={{ marginBottom: 10 }}>{label}</div>

                    <input
                        type="range"
                        min={0}
                        max={100}
                        step={1}
                        value={progress}
                        onChange={this.handleChange}
                        style={{ width: "100%", display: "block", marginBottom: 12 }}
                        aria-label="Tiến độ"
                    />

                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}