import * as React from 'react';
import { useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { formClassName } from '../../../../utility/StyleUtils';
import "./MdLoader.scss"
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client'
import { Page } from '../../../../types/Page';


interface MdLoaderProps {

}

function MdLoader(props: MdLoaderProps) {
    const GET_REQ = gql`
        query{
            getPages(
                pids:[1], 
                lid: 1, 
                auth: {
                    csrf:"csrf2"
                }
            ){
            ... on Page{
                id, data{
                        name, parts{
                            id, data{
                                type, content
                            }
                        }
                    }
                }
            }
        }
    `

    const { loading, error, data } = useQuery(GET_REQ);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{"Error : " + error.message}</p>;

    let page = data.getPages[0] as Page;
    const parts = page.data.parts.map(
        i => {
            let counter = 0;
            const ret = <ReactMarkdown key={counter} {...props}>
                {i.data.content}
            </ReactMarkdown>
            ++counter;
            return ret;
        }
    );

    console.log(page.data.parts)

    return (
        <>{parts}</>
    );
}

export default MdLoader;