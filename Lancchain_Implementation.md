# **Step-by-step implementation plan** for integrating LangChain-powered clothing suggestions into your React + TypeScript weather application. Each step is self-contained, with objectives, expected inputs/outputs, and LangChain or LLM specifics where relevant.

---

### Step 1: Install AI Dependencies

**Objective:**
Add LangChain and OpenAI libraries to the server.

**Actions:**

* Run `npm install langchain openai` in your server directory.

**Inputs:**

* Existing `package.json` in the server folder.

**Outputs:**

* Updated `package.json` and `package-lock.json` including `langchain` and `openai`.

---

### Step 2: Update Environment Configuration

**Objective:**
Prepare for OpenAI API usage by configuring environment variables.

**Actions:**

* Add `OPENAI_API_KEY` to your `.env` file and `.env.example`, alongside any existing variables.

**Inputs:**

* `.env`, `.env.example`.

**Outputs:**

* Environment variables are available for your server code.

---

### Step 3: Define Weather Data Structure

**Objective:**
Standardize the weather data structure sent to the LLM.

**Actions:**

* Create a TypeScript interface (e.g., `SimplifiedWeather`) representing essential weather details (temperature, condition, rain, wind, etc.).
* Place in `types/SimplifiedWeather.ts`.

**Inputs:**

* Existing weather data format from your application.

**Outputs:**

* Shared `SimplifiedWeather` type for both server and client use.

---

### Step 4: Implement Weather Summary Utility

**Objective:**
Transform raw weather data into a human-readable summary string for prompt injection.

**Actions:**

* Write a function (e.g., `summarizeWeather`) that outputs a short description like `"14°C, cloudy, chance of rain, light wind"`.

**Inputs:**

* `SimplifiedWeather` object.

**Outputs:**

* Summary string representing the key weather info.

---

### Step 5: Create a Prompt Template for Suggestions

**Objective:**
Ensure consistent, effective prompts for the language model.

**Actions:**

* Use LangChain’s `PromptTemplate` to define a prompt such as:

  ```
  You are a friendly assistant that gives short clothing advice. Keep it under 25 words. Here is the weather data: {weather}
  ```
* Store in `prompts/clothingSuggestion.ts`.

**Inputs:**

* Weather summary string.

**Outputs:**

* Parameterized prompt template.

**LangChain Usage:**

* Import and use `PromptTemplate`.

---

### Step 6: Build LLM Service Function

**Objective:**
Encapsulate the LLM call logic using LangChain’s OpenAI interface.

**Actions:**

* Create a function (e.g., `getClothingSuggestion`) that accepts a prompt string and calls GPT-4o Mini using LangChain, with low temperature for deterministic output.

**Inputs:**

* Prompt string (from the previous step).

**Outputs:**

* LLM-generated suggestion (string).

**LangChain Usage:**

* Use `OpenAI` model with `{ modelName: "gpt-4o-mini", temperature: 0.2 }`.

---

### Step 7: Implement Clothing Suggestion API Endpoint

**Objective:**
Expose the AI service to the frontend via a new Express endpoint.

**Actions:**

* Add a POST route `/suggest-clothing` to your Express server.
* Validate and accept `SimplifiedWeather` JSON from the request body.
* Call the LLM service from Step 6 and return the suggestion.

**Inputs:**

* POST body: `SimplifiedWeather` object.

**Outputs:**

* JSON response: `{ suggestion: string }` or error message.

---

### Step 8: Add Validation and Robust Error Handling

**Objective:**
Ensure resilience and safety against bad input or LLM failure.

**Actions:**

* Use a schema validation library (e.g., `zod`, `io-ts`) to validate incoming weather data.
* Return clear error responses for invalid data or LLM call failures.

**Inputs:**

* Incoming API requests.

**Outputs:**

* 400/500 error responses as needed.

---

### Step 9: Test AI Service and Endpoint

**Objective:**
Verify correct behavior and prevent regressions.

**Actions:**

* Write unit tests for the LLM service function and the Express route.
* Mock LangChain/OpenAI to produce predictable outputs.
* Test both success and error cases.

**Inputs:**

* LLM service code, Express endpoint.

**Outputs:**

* Passing test suite confirming valid and invalid behavior.

---

### Step 10: Create Client Utility for Fetching Suggestions

**Objective:**
Enable the client to request clothing suggestions.

**Actions:**

* Add a function to the client (e.g., in `utils/clothingService.ts`) that POSTs `SimplifiedWeather` to `/suggest-clothing` and returns the suggestion.

**Inputs:**

* `SimplifiedWeather` object on the client.

**Outputs:**

* Promise resolving to a clothing suggestion string.

---

### Step 11: Integrate Suggestion into React Flow

**Objective:**
Fetch and display clothing advice alongside weather info.

**Actions:**

* Call the clothing suggestion utility after weather data is loaded (e.g., within `useWeatherData` or a new custom hook).
* Render the returned suggestion in the UI, such as a new component or below current weather details.

**Inputs:**

* Weather data from client state.

**Outputs:**

* Clothing suggestion rendered in the React application.

---

### Step 12: Document the Feature

**Objective:**
Clearly explain the new feature for future contributors and users.

**Actions:**

* Update README and/or a dedicated feature doc.
* Include setup instructions, env var requirements, API usage, and troubleshooting notes.

**Inputs:**

* Implementation details from previous steps.

**Outputs:**

* Documentation changes in your repo.

---

#### **Summary**

* **Steps 1–2:** Prepare your server for OpenAI/LangChain integration.
* **Steps 3–5:** Standardize and summarize weather data for LLM prompts.
* **Steps 6–9:** Build, expose, and test the LLM-backed API service.
* **Steps 10–11:** Connect the frontend to display suggestions to the user.
* **Step 12:** Ensure maintainability with solid documentation.

This roadmap will add a robust, well-tested, and maintainable AI-powered clothing suggestion feature to your application.
