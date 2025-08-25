import  {Component, type ChangeEvent, type FormEvent} from 'react';

interface IEmailFormState {
    email: string;
}
class Ex1 extends Component<object, IEmailFormState> {
    constructor(props: object) {
        super(props);
        this.state = {
            email: "nva@gmail.com",
        };
    }
    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ email: event.target.value });
    };
    handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { email } = this.state;
        console.log({ email });
    };
    render() {
        return (
            <div style={{ maxWidth: 420, margin: "40px auto", fontFamily: "sans-serif" }}>
                <h2>Form</h2>

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="email" style={{ display: "block", marginBottom: 6 }}>
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                        required
                        style={{
                            padding: 8,
                            width: "260px",
                            marginRight: 8,
                        }}
                    />
                    <button type="submit" style={{ padding: "8px 16px" }}>
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default Ex1;