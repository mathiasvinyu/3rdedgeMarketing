# Contact Inquiry API Contract: Four-Page Website Rebuild

**Feature**: [001-website-rebuild](../spec.md)  
**Date**: 2026-09-19  

## Endpoint: `POST /api/contact`

Receives visitor project inquiries submitted through the contact modal or page-level forms.

### Request

- **Method**: `POST`
- **Headers**:
  - `Content-Type: application/json`
  - `Accept: application/json`

#### Request Payload
```json
{
  "name": "Jane Doe",
  "email": "jane@institution.org",
  "organization": "Department of Public Services",
  "projectSummary": "We are looking to rebuild our citizen service portal to improve mobile accessibility.",
  "timeframe": "Next 3-6 months"
}
```

#### Field Specifications
| Field | Type | Required | Constraints |
| --- | --- | --- | --- |
| `name` | string | Yes | 2–100 characters, trimmed |
| `email` | string | Yes | Valid email format |
| `organization` | string | No | Max 150 characters |
| `projectSummary` | string | Yes | 10–2000 characters |
| `timeframe` | string | No | Selected timeframe option or plain string |

---

### Responses

#### 1. Success (`201 Created` / `200 OK`)
```json
{
  "success": true,
  "message": "Thank you for reaching out. We have received your inquiry and will be in touch shortly.",
  "inquiryId": "inq_20260919_8471"
}
```

#### 2. Validation Error (`400 Bad Request`)
```json
{
  "success": false,
  "error": "Validation failed",
  "details": [
    { "field": "email", "issue": "Please provide a valid email address." },
    { "field": "projectSummary", "issue": "Project summary must be at least 10 characters." }
  ]
}
```

#### 3. Server Error (`500 Internal Server Error`)
```json
{
  "success": false,
  "error": "Unable to submit inquiry at this time. Please email us directly at hello@3rdedge.co.za."
}
```
