const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "e@e.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        title: "Prepare Sales Report",
        description: "Compile weekly sales data and summarize key metrics.",
        date: "2025-11-13",
        category: "Reports",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Update Client Database",
        description: "Add new leads from last marketing campaign to CRM.",
        date: "2025-11-12",
        category: "Data Entry",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Follow up with Clients",
        description: "Call pending clients and get feedback on proposals.",
        date: "2025-11-10",
        category: "Communication",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },

  {
    id: 2,
    firstName: "Riya",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 2,
      completed: 2,
      failed: 0,
    },
    tasks: [
      {
        title: "Design Homepage Banner",
        description: "Create new banner for Diwali sale using Figma.",
        date: "2025-11-09",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Team Meeting",
        description: "Attend design team weekly meeting.",
        date: "2025-11-13",
        category: "Meeting",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Review UI Components",
        description:
          "Check all UI elements for consistency and responsiveness.",
        date: "2025-11-14",
        category: "Design Review",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Fix Header Alignment Bug",
        description: "Resolve layout issue on mobile view.",
        date: "2025-11-11",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },

  {
    id: 3,
    firstName: "Vikram",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 2,
      completed: 2,
      failed: 1,
    },
    tasks: [
      {
        title: "Server Health Check",
        description:
          "Run diagnostics and ensure uptime on all deployed servers.",
        date: "2025-11-12",
        category: "IT Maintenance",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Database Backup",
        description: "Perform weekly backup of production database.",
        date: "2025-11-11",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Security Audit",
        description:
          "Audit login and user permissions for unauthorized access.",
        date: "2025-11-13",
        category: "Security",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Resolve API Timeout",
        description: "Investigate latency issues in payment API.",
        date: "2025-11-10",
        category: "Backend",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Optimize SQL Queries",
        description: "Improve performance of long-running queries.",
        date: "2025-11-09",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },

  {
    id: 4,
    firstName: "Kavya",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 1,
    },
    tasks: [
      {
        title: "Social Media Campaign",
        description: "Schedule and post updates on company social platforms.",
        date: "2025-11-14",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Write Blog Post",
        description: "Draft an article on AI trends for the website blog.",
        date: "2025-11-10",
        category: "Content",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Email Newsletter",
        description: "Create November newsletter template.",
        date: "2025-11-13",
        category: "Marketing",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Ad Performance Report",
        description: "Analyze ad reach and engagement metrics.",
        date: "2025-11-09",
        category: "Analytics",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Campaign Budget Review",
        description: "Review and adjust budget allocations.",
        date: "2025-11-12",
        category: "Finance",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },

  {
    id: 5,
    firstName: "Sahil",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        title: "Customer Feedback Analysis",
        description: "Summarize reviews and highlight improvement areas.",
        date: "2025-11-11",
        category: "Customer Support",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Training Session",
        description: "Attend internal training on conflict resolution.",
        date: "2025-11-13",
        category: "Training",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Resolve Support Tickets",
        description: "Handle pending customer tickets assigned this week.",
        date: "2025-11-09",
        category: "Customer Support",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Prepare FAQs",
        description: "Update and format new FAQs for product page.",
        date: "2025-11-14",
        category: "Documentation",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
];

const admin = {
  id: 1,
  //firstName: "Admin",
  email: "admin@example.com",
  password: "123",
};

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  console.log("employees data is", employees);
  console.log("admin data is", admin);
  return { employees, admin };
};
