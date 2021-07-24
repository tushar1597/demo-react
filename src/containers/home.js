// import { connect } from "react-redux";
// import { setLoading } from "../actions/util.action";
// import "../styles/home.css";

// function Home(props) {
//     return (
//         <>
//             <h1>Home Page</h1>
//             <button
//                 className={props.loading ? "green" : "red"}
//                 onClick={props.setLoading}
//             >
//                 Click
//             </button>
//         </>
//     );
// }

// const mapStateToProps = (state) => ({
//     loading: state.util.loading,
// });

// const mapDispatchToProps = {
//     setLoading,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Home);

// ===================================================

// import React, { useState } from "react";
// import ReactDOM from "react-dom";

// const style = {
//     table: {
//         borderCollapse: "collapse",
//     },
//     tableCell: {
//         border: "1px solid gray",
//         margin: 0,
//         padding: "5px 10px",
//         width: "max-content",
//         minWidth: "150px",
//     },
//     form: {
//         container: {
//             padding: "20px",
//             border: "1px solid #F0F8FF",
//             borderRadius: "15px",
//             width: "max-content",
//             marginBottom: "40px",
//         },
//         inputs: {
//             marginBottom: "5px",
//         },
//         submitBtn: {
//             marginTop: "10px",
//             padding: "10px 15px",
//             border: "none",
//             backgroundColor: "lightseagreen",
//             fontSize: "14px",
//             borderRadius: "5px",
//         },
//         error: {
//             color: "red",
//         },
//     },
// };

// function PhoneBookForm({ addEntryToPhoneBook }) {
//     const [firstName, setFirstName] = useState("Coder");
//     const [lastName, setLastName] = useState("Byte");
//     const [phone, setPhone] = useState("885559999");
//     const [error, setError] = useState("");

//     const addData = () => {
//         if (!(firstName && lastName && phone)) {
//             setError("Please Fill All the Details!");
//             return;
//         }
//         const record = {
//             firstName,
//             lastName,
//             phone,
//         };
//         addEntryToPhoneBook(record);
//         setFirstName("");
//         setLastName("");
//         setPhone("");
//         setError("");
//     };

//     const getFirstName = (e) => {
//         const value = e.target.value;
//         const regex = /^[a-zA-Z ]{0,30}$/;
//         if (regex.test(value)) {
//             setFirstName(value);
//         }
//     };

//     const getLastName = (e) => {
//         const value = e.target.value;
//         const regex = /^[a-zA-Z ]{0,30}$/;
//         if (regex.test(value)) {
//             setLastName(value);
//         }
//     };

//     const getPhone = (e) => {
//         let value = e.target.value;
//         if (value.length > 10) {
//             return;
//         }
//         if (isNaN(value)) {
//             return;
//         }
//         if (value.length && value[0] < 6) {
//             return;
//         }
//         setPhone(value);
//     };
//     return (
//         <form
//             onSubmit={(e) => {
//                 e.preventDefault();
//             }}
//             style={style.form.container}
//         >
//             <label>First name:</label>
//             <br />
//             <input
//                 style={style.form.inputs}
//                 className="userFirstname"
//                 name="userFirstname"
//                 type="text"
//                 value={firstName}
//                 onChange={getFirstName}
//             />
//             <br />
//             <label>Last name:</label>
//             <br />
//             <input
//                 style={style.form.inputs}
//                 className="userLastname"
//                 name="userLastname"
//                 type="text"
//                 value={lastName}
//                 onChange={getLastName}
//             />
//             <br />
//             <label>Phone:</label>
//             <br />
//             <input
//                 style={style.form.inputs}
//                 className="userPhone"
//                 name="userPhone"
//                 type="text"
//                 value={phone}
//                 onChange={getPhone}
//             />
//             <br />
//             <input
//                 style={style.form.submitBtn}
//                 className="submitButton"
//                 type="submit"
//                 value="Add User"
//                 onClick={addData}
//             />
//             <p style={style.form.error}>{error}</p>
//         </form>
//     );
// }

// function InformationTable({ phoneBook }) {
//     return (
//         <table style={style.table} className="informationTable">
//             <thead>
//                 <tr>
//                     <th style={style.tableCell}>First name</th>
//                     <th style={style.tableCell}>Last name</th>
//                     <th style={style.tableCell}>Phone</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {phoneBook.map(({ firstName, lastName, phone }, index) => {
//                     return (
//                         <tr key={"td-" + index}>
//                             <td style={style.tableCell}>{firstName}</td>
//                             <td style={style.tableCell}>{lastName}</td>
//                             <td style={style.tableCell}>{phone}</td>
//                         </tr>
//                     );
//                 })}
//             </tbody>
//         </table>
//     );
// }

// function Application(props) {
//     const [phoneBook, updatePhoneBook] = useState([]);
//     function compare(a, b) {
//         if (a.lastName < b.lastName) {
//             return -1;
//         }
//         if (a.lastName > b.lastName) {
//             return 1;
//         }
//         return 0;
//     }
//     const addEntryToPhoneBook = (record) => {
//         let data = [...phoneBook, record];
//         data.sort(compare);
//         updatePhoneBook(data);
//     };
//     return (
//         <section>
//             <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook} />
//             <InformationTable phoneBook={phoneBook} />
//         </section>
//     );
// }

// export default Application;
// ReactDOM.render(<Application />, document.getElementById("root"));

// import React, { useState } from "react";
// import ReactDOM from "react-dom";

// const style = {
//     button: {
//         on: {
//             color: "yellowgreen",
//             background: "rgb(210, 231, 167)",
//             border: "1px solid yellowgreen",
//         },
//         off: {
//             color: "red",
//             background: "rgb(216, 174, 174)",
//             border: "1px solid red",
//         },
//     },
// };

// class Toggle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             toggleState: true,
//         };
//     }

//     handleClick = () => {
//         this.setState({
//             toggleState: !this.state.toggleState,
//         });
//     };

//     render() {
//         return (
//             <button
//                 onClick={this.handleClick}
//                 style={
//                     this.state.toggleState ? style.button.on : style.button.off
//                 }
//             >
//                 {this.state.toggleState ? "ON" : "OFF"}
//             </button>
//         );
//     }
// }

// export default Toggle;

import React, { useState } from "react";
import { createContext } from "react";
import ReactDOM from "react-dom";

const languages = ["JavaScript", "Python"];
const LangContext = createContext(0);
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: 0,
            toggleLang: this.toggleLang,
        };
    }

    toggleLang = () => {
        this.setState({
            lang: this.state.lang ? 0 : 1,
        });
    };

    render() {
        return (
            <LangContext.Provider value={this.state}>
                <MainSection />
            </LangContext.Provider>
        );
    }
}

class MainSection extends React.Component {
    static contextType = LangContext;
    componentDidMount() {
        console.log(this.context);
    }
    toggleLanguage = () => {
        const context = this.context;
        context.toggleLang();
    };
    render() {
        return (
            <div>
                <p id="favoriteLanguage">
                    Favorite programing language: {languages[this.context.lang]}
                </p>
                <button id="changeFavorite" onClick={this.toggleLanguage}>
                    Toggle language
                </button>
            </div>
        );
    }
}

export default App;
