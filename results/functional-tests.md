# Functional verification matrix

| Case | Next | FreeLang Front | Evidence required |
|---|---|---|---|
| List and search | pending browser check | curl PASS | 200 and matching count/order |
| Detail and 404 | curl PASS / browser pending | curl PASS / browser pending | 200/404 |
| New-post GET and valid POST | browser Server Action pending | curl POST PASS | rendered form and redirect/detail |
| Invalid post | pending | pending | accessible error text |
| Like interaction | browser pending | browser pending | request and rendered count refresh |
| API read/write/like | curl PASS | curl PASS | status and shared DB row |
| Invalid page / id | pending | pending | normalised page / 404 |
| Request-time DB reads | pending headers/log capture | pending headers/log capture | two requests after write differ |

`pending` is deliberately not a PASS: browser automation was not available in this executor at report creation.
