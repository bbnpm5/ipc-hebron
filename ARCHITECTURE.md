# Architecture Documentation

## Current Architecture Pattern

### **Component-Based / Feature-Based Architecture**

This project uses a **Component-Based Architecture** (also known as **Feature-Based Architecture**), which is the standard pattern for React applications. It is **NOT** Clean Architecture.

## Architecture Overview

```
src/
├── components/          # Reusable UI components
├── pages/              # Page-level components (routes)
├── services/          # External API integrations
├── utils/             # Utility functions
├── config/             # Configuration files
└── locales/            # Internationalization
```

## Architecture Layers

### 1. **Presentation Layer** (Components & Pages)
- **Location**: `src/components/`, `src/pages/`
- **Purpose**: UI rendering and user interaction
- **Examples**: `Header.jsx`, `Footer.jsx`, `Home.jsx`, `About.jsx`

### 2. **Service Layer** (External Integrations)
- **Location**: `src/services/`
- **Purpose**: External API calls and data fetching
- **Examples**: `googleCalendar.js`

### 3. **Utility Layer** (Helper Functions)
- **Location**: `src/utils/`
- **Purpose**: Reusable utility functions
- **Examples**: `youtube.js`

### 4. **Configuration Layer**
- **Location**: `src/config/`
- **Purpose**: Third-party service configurations
- **Examples**: `emailjs.js`

### 5. **Data Layer** (i18n)
- **Location**: `src/locales/`
- **Purpose**: Internationalization data

## Architecture Characteristics

### ✅ **What This Architecture Has:**

1. **Separation of Concerns**
   - Components separated from pages
   - Services separated from UI
   - Utilities separated from business logic

2. **Component Reusability**
   - Reusable components in `components/`
   - Page-specific components in `pages/`

3. **Service Abstraction**
   - External APIs abstracted in `services/`
   - Configuration separated in `config/`

4. **Clear Folder Structure**
   - Logical organization by file type
   - Easy to navigate and understand

### ❌ **What Clean Architecture Would Have:**

1. **Domain Layer** (Business Logic)
   - Entities and business rules
   - Independent of frameworks

2. **Application Layer** (Use Cases)
   - Application-specific business logic
   - Orchestrates domain objects

3. **Infrastructure Layer** (External Concerns)
   - API calls, database, file system
   - Implements interfaces from domain/application

4. **Presentation Layer** (UI)
   - React components
   - Depends on application layer, not infrastructure

5. **Dependency Inversion**
   - High-level modules don't depend on low-level modules
   - Both depend on abstractions

## Current Architecture Diagram

```
┌─────────────────────────────────────────┐
│         Presentation Layer              │
│  (Components, Pages, UI Components)     │
│                                         │
│  ┌──────────┐  ┌──────────┐          │
│  │  Pages  │  │ Components  │          │
│  └──────────┘  └──────────┘          │
└─────────────────────────────────────────┘
           │              │
           ▼              ▼
┌─────────────────────────────────────────┐
│         Service Layer                    │
│  (API Calls, External Services)         │
│                                         │
│  ┌──────────┐  ┌──────────┐          │
│  │ Services │  │  Config  │          │
│  └──────────┘  └──────────┘          │
└─────────────────────────────────────────┘
           │
           ▼
┌─────────────────────────────────────────┐
│         Utility Layer                   │
│  (Helper Functions, Pure Functions)     │
│                                         │
│  ┌──────────┐                          │
│  │  Utils   │                          │
│  └──────────┘                          │
└─────────────────────────────────────────┘
```

## Comparison: Current vs Clean Architecture

| Aspect | Current Architecture | Clean Architecture |
|--------|---------------------|-------------------|
| **Layers** | 3-4 layers (Presentation, Service, Utility) | 4+ layers (Domain, Application, Infrastructure, Presentation) |
| **Dependencies** | Direct imports between layers | Dependency Inversion Principle |
| **Business Logic** | Mixed in components/services | Separated in domain/application layers |
| **Testability** | Moderate (components testable) | High (layers independently testable) |
| **Framework Independence** | Tightly coupled to React | Domain/Application independent |
| **Complexity** | Low-Medium | High |
| **Best For** | Small to medium React apps | Large, complex applications |

## Why This Architecture Works for This Project

### ✅ **Appropriate for:**
- Small to medium-sized React applications
- Church website with straightforward features
- Team familiar with React patterns
- Quick development and iteration
- Clear separation without over-engineering

### ✅ **Benefits:**
1. **Simplicity** - Easy to understand and navigate
2. **React-Native** - Follows React community standards
3. **Fast Development** - No unnecessary abstractions
4. **Maintainable** - Clear folder structure
5. **Scalable Enough** - Can grow with the project

## When to Consider Clean Architecture

Consider Clean Architecture if:
- ✅ Application grows significantly (100+ components)
- ✅ Complex business logic needs separation
- ✅ Multiple teams working on different layers
- ✅ Need to swap frameworks (React → Vue)
- ✅ Strict testing requirements for business logic
- ✅ Long-term maintenance with changing requirements

## Current Architecture Strengths

1. **✅ Clear Component Organization**
   - Reusable components separated
   - Page components isolated
   - Easy to find and modify

2. **✅ Service Abstraction**
   - External APIs in dedicated service files
   - Configuration separated
   - Easy to mock for testing

3. **✅ Utility Functions**
   - Pure functions separated
   - Reusable across components
   - Easy to test independently

4. **✅ Internationalization**
   - i18n properly structured
   - Language files organized
   - Easy to add new languages

## Recommendations for Improvement

### 1. **Add Hooks Directory** (Optional)
```
src/
├── hooks/              # Custom React hooks
│   ├── useEvents.js
│   ├── usePrayerRequest.js
│   └── useLanguage.js
```

### 2. **Add Context/State Management** (If Needed)
```
src/
├── context/            # React Context providers
│   ├── AuthContext.jsx
│   └── ThemeContext.jsx
```

### 3. **Add Types Directory** (If Using TypeScript)
```
src/
├── types/              # TypeScript type definitions
│   ├── events.ts
│   └── sermon.ts
```

### 4. **Add Constants** (For Magic Strings/Numbers)
```
src/
├── constants/          # Application constants
│   ├── routes.js
│   └── api.js
```

## Conclusion

**Current Architecture**: Component-Based / Feature-Based Architecture
- ✅ Appropriate for this project size and complexity
- ✅ Follows React best practices
- ✅ Maintainable and scalable for current needs
- ❌ Not Clean Architecture (but doesn't need to be)

**Recommendation**: Keep the current architecture. It's well-suited for a church website. Only consider Clean Architecture if the project grows significantly in complexity.
