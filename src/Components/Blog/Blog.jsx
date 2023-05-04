import React, { useEffect, useState } from 'react';
import Login from '../Layout/Login/Login';

const Blog = () => {

    return (
        <>
            <h1 className='text-center font-extrabold text-5xl mt-6 text-indigo-600'>Some Questions and Answers</h1>
            <div className='bg-sky-200'>
                <h1 className='font-bold text-2xl mt-8 lg:ms-8'>1.Tell us the differences between uncontrolled and controlled components.</h1>

                <div className="overflow-x-auto mt-5">
                    <table className="table w-3/4 mt-7">
                        {/* head*/}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Uncontrolled components</th>
                                <th>Controlled components</th>

                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>Managed by components own internal state</td>
                                <td>Managed by React state</td>

                            </tr>
                            {/* row 2 */}
                            <tr className="active">
                                <th>2</th>
                                <td>Component updates own internal state on user interaction</td>
                                <td>Parent component updates state on user interaction</td>

                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>3</th>
                                <td>Generally slower as theres more state management</td>
                                <td>Generally faster as theres less state management</td>

                            </tr>
                        </tbody>
                    </table>
                </div>

                <h1 className='font-bold text-2xl mt-8 lg:ms-8'>2.How to validate React props using PropTypes</h1>
                <p className='mt-5 lg:ms-8 font-semibold'>Props and PropTypes are important mechanisms for passing read-only attributes between React components.

                    We can use React props, short for properties, to send data from one component to another. If a component receives the wrong type of props, it can cause bugs and unexpected errors in your app.

                    Since JavaScript doesn’t have a built-in type checking solution, many developers use extensions like TypeScript and Flow. However, React has an internal mechanism for props validation called PropTypes. In this article, we’ll learn how to validate props with React PropTypes.</p>

                <h1 className='font-bold text-2xl mt-8 lg:ms-8'>3.Tell us the difference between nodejs and express js.</h1>

                <div className="overflow-x-auto mt-5">
                    <table className="table w-3/4 mt-7">
                        {/* head*/}
                        <thead>
                            <tr>
                                <th></th>
                                <th>nodejs</th>
                                <th>expressjs</th>

                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td> It is used to build server-side, input-output, event-driven apps.</td>
                                <td>	It is used to build web-apps using approaches and principles of Node.js.</td>

                            </tr>
                            {/* row 2 */}
                            <tr className="active">
                                <th>2</th>
                                <td>Run-time platform or environment designed for server-side execution of JavaScript.</td>
                                <td>Framework based on Node.js.</td>

                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>3</th>
                                <td>Doesn’t use such a provision.</td>
                                <td>Uses middleware for the arrangement of functions systematically server-side.</td>

                            </tr>
                        </tbody>
                    </table>
                </div>
                <h1 className='font-bold text-2xl mt-8 lg:ms-8'>4.What is a custom hook, and why will you create a custom hook?</h1>
                <p className='mt-5 lg:ms-8 font-semibold'>Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem. But what if there is no such library with hooks that can be used? This problem is solved by using custom React JS hooks.

                    A custom hook is a special JavaScript function whose name starts with ‘use’ and can be used to call other hooks. Let’s take a look at some major differences between a custom React JS hook and React JS components:

                    A custom hook does not require a specific signature.
                    A software developer can choose what argument the custom hook has and what should the argument return.
                    A custom hook always starts with the name ‘use’</p>
            </div>
        </>
    );
};

export default Blog;