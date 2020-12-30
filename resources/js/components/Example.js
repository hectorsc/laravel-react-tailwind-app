import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
    return (
        <div className="container bg-red-500 text-center">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">COMPONENTE EN REACT</div>

                        <div className="card-body">Soy un componente de REACT! y estoy usando tailwind css</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
