var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var HomePage = React.createClass({
    render: function() {

        return (
            <div>
                <h1>Home</h1>
                <ul>
                    <li>
                        <Link to={"/list" + "/" + "1"}>
                            List 1
                        </Link>
                    </li>
                    <li>
                        <Link to={"/list" + "/" + "2"}>
                            List 2
                        </Link>
                    </li>
                    <li>
                        <Link to={"/list" + "/" + "3"}>
                            List 3
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = HomePage;
