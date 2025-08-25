import { Component, type FormEvent, type ChangeEvent } from "react";

interface State {
    birthday: string;
    submittedBirthday: string;
}

export default class BirthdayForm extends Component<object, State> {
    state: State = {
        birthday: "",
        submittedBirthday: "",
    };

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({ birthday: e.target.value });
    };

    handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.setState({ submittedBirthday: this.state.birthday });
    };

    render() {
        const { birthday, submittedBirthday } = this.state;

        return (
            <div style={{ margin: "30px", fontSize: "18px" }}>
                <form
                    onSubmit={this.handleSubmit}
                    style={{ border: "1px solid #ccc", padding: "20px", width: "320px" }}
                >
                    <label htmlFor="dob" style={{ display: "block", marginBottom: 8 }}>
                        Ngày sinh:
                    </label>
                    <input
                        id="dob"
                        type="date"
                        value={birthday}
                        onChange={this.handleChange}
                        style={{ width: "100%", padding: "6px 8px" }}
                    />
                    <button type="submit" style={{ marginTop: 12 }}>Submit</button>
                </form>

                {submittedBirthday && (
                    <p style={{ marginTop: 16 }}>Ngày sinh: {submittedBirthday}</p>
                )}
            </div>
        );
    }
}