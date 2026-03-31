import streamlit as st

st.set_page_config(page_title="AI Study Planner", layout="centered")

st.title("📚 AI Study Planner")

if "tasks" not in st.session_state:
    st.session_state.tasks = []

task = st.text_input("Enter study task")
hours = st.number_input("Enter hours", min_value=1, max_value=12)

if st.button("Add Task"):
    if task and hours:
        st.session_state.tasks.append({"task": task, "hours": hours})
    else:
        st.warning("Please enter valid data")

st.subheader("📝 Your Tasks")
for t in st.session_state.tasks:
    st.write(f"- {t['task']} ({t['hours']} hrs)")

if st.button("Generate Smart Plan"):
    st.subheader("📅 Study Plan")

    start_hour = 8
    total = 0

    for t in st.session_state.tasks:
        end = start_hour + t["hours"]
        st.write(f"{start_hour}:00 - {end}:00 → {t['task']}")
        start_hour = end
        total += t["hours"]

    st.success(f"Total Study Time: {total} hrs")
