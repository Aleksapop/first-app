const { time } = require("console");

const person = {
    fname: "aleksa",
    age: 18,
    isLearing: true
}

const userProfile = {
    id: 12345,
    name: {
        first: "John",
        last: "Doe"
    },
    email: "john.doe@example.com",
    isActive: true,
    interests: ["coding", "hiking", "photography"],
    address: {
        street: "123 Main St",
        city: "Miami",
        state: "FL",
        zip: "33101"
    },
    loginHistory: [
        { date: "2025-04-24", location: "Miami" },
        { date: "2025-04-22", location: "Orlando" }
    ],
    getFullName: function () {
        return `${this.name.first} ${this.name.last}`;
    }
};


const company = {
    name: "TechNova Inc.",
    founded: 2015,
    isActive: true,
    departments: [
        {
            name: "Engineering",
            head: {
                name: "Alice Smith",
                experience: 10,
            },
            teams: [
                {
                    name: "Frontend",
                    lead: "Bob Johnson",
                    members: [
                        { name: "Carol", role: "React Developer" },
                        { name: "David", role: "UI/UX Designer" }
                    ]
                },
                {
                    name: "Backend",
                    lead: "Eve Brown",
                    members: [
                        { name: "Frank", role: "Node.js Developer" },
                        { name: "Grace", role: "Database Engineer" }
                    ]
                }
            ]
        },
        {
            name: "Marketing",
            head: {
                name: "Henry White",
                experience: 8,
            },
            campaigns: [
                {
                    title: "Product Launch",
                    budget: 50000,
                    platforms: ["YouTube", "Instagram", "LinkedIn"]
                },
                {
                    title: "Brand Awareness",
                    budget: 30000,
                    platforms: ["Facebook", "Twitter"]
                }
            ]
        }
    ],
    locations: {
        headquarters: {
            city: "San Francisco",
            address: {
                street: "1 Market St",
                zip: "94105"
            }
        },
        remoteOffices: [
            {
                city: "New York",
                address: {
                    street: "500 5th Ave",
                    zip: "10036"
                }
            },
            {
                city: "Austin",
                address: {
                    street: "600 Congress Ave",
                    zip: "78701"
                }
            }
        ]
    }
};


console.log(company.departments[0].teams[1].members[0].role)
console.log(company.departments[1].campaigns[0].platforms[2])


