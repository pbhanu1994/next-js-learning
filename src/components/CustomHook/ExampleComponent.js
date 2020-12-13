import React from 'react';
import useDocumentTitle from './useDocumentTitle';

export default function ExampleComponent() {
    
    const documentTitle = "Example Component";
    
    useDocumentTitle(documentTitle);
    
    return (<h1>This is a Example Component using Custom Hook to update the Document Title</h1>)
}