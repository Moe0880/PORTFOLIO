export default {
    name: "project",
    title: "Project",
    type:  "document",
    fields: [
        {
            name: "title",
            type: "string",
        },
        {
            name: "date",
            type: "datetime",
        },
        {
            name: "place",
            type: "string"
        },
        {
            name: "discription",
            type: "text"
        },
        {
            name: "prjectType",
            title: "ProjectType",
            type: "string",
            options: {
                list: [
                    {value: "personal", title: "Personal"},
                    {value: "client", title: "Client"},
                    {value: "school", title: "School"},
                    {value: "industry", title: "Industry"},
                    {value: "work", title: "Work"},
                ]
            }
        },
        {
            name: "link",
            type: "url",
        },
        {
            name: "tags",
            type: "array",
            of: [
                {type: "string",
            },
            ],
            options: {
                layout: "tags",
            },
        },
    ],
};