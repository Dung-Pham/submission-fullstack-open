```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: Browser invokes event handler to add new note to notes list 

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa 
    activate server
    server-->>browser: status code: 201 Created
    deactivate server

```