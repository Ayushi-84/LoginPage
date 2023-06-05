import React from 'react'
import "./About.css"
import Header from "./Header"
import {Footer} from "./Footer"

export const About = () => {

  let myStyle={
    minHeight:"100vh",
 }

  return (
<div>
   <Header title="My Todos List" searchBar={false} /> 
   
    <div className='container' style={myStyle}>

      
        
        <div className='heading heade'>
        Creative Ways to Visualize Your To-Do List
        </div>

        <div className='content'>
        One of the simplest joys in life is to cross off a completed item from your to-do list as it gives you an amazing sense of accomplishment. In this post, we are going to talk about creative to-do list ideas and ways in which you can visualize them to keep a track of your day-to-day tasks.
        </div>

        <div className='title'>
        How Can a To-Do List Boost Productivity?
        </div>

        <p className='content'>
        Procrastination is a hurdle that every one of us is challenged to overcome, and the best tool to tackle it is to make sure that you are on track when it comes to tasks that you are required to complete. There is nothing simpler to track your tasks than a to-do list. It will give you a clear picture of the workload so that you can manage your time efficiently.</p>

        <p className='content'>
Moreover, to-do lists allow you to prioritize tasks and identify unimportant work that can be later worked on. It will ensure that you are focused and making efforts to complete the right amount of work. Ultimately, a crossed-off to-do list will give you the satisfaction of accomplishing what you set out to do at the beginning of your day.
          </p>

          <div className='heading'>
          Consider These Things Before Visualizing Your To-Do List
          </div>

          <div className='title'>
          Examine How Your Time Is Spent
          </div>

          <div className='content'>
          Before setting out to plan your to-do list, it is important to evaluate how your time is spent daily. This helps determine what tasks you spend most of your time on. Make a time management plan to include a balance between your personal and professional lives. Don’t forget to add a sufficient amount of breaks to your schedule so that there is time for you to take a rest and recharge before transitioning between tasks. You can even use the timeboxing technique to divide your day into time blocks. Each box is dedicated to a specific activity or group of activities. This way you can gain clarity on how your time is spent throughout the day.
          </div>

          <div className='title'>
          Prioritize Tasks
          </div>

          <div className='content'>
          Tasks on your to-do list should ideally be listed from highest to lowest priority. The Eisenhower Matrix is a proven time management tool that helps you visualize tasks according to priority. This will provide a clear idea of the order in which each job needs to be completed. Prioritizing will lead to better time allocation, thereby allowing you to work more efficiently.
            </div>

            <div className='title'>
            Plan Your Day
            </div>

            <div className='content'>
              <p>
              Now that you have a clear idea of how your time is spent daily, the next step is coming up with a more effective plan to spend your time. As a saying goes, “the early bird catches the prey,” it is always better to have an early start for the day. This will make sure that you don’t run out of time to do what is important. Most people make the mistake of starting their days late and end up working long hours to complete their work. This prevents you from having quality time for yourself – the time that you could have spent on something enjoyable.
              </p>
              <p>
              Plan your tomorrow, today and make sure to do it in a manner that allows you to spend your time effectively throughout the day.
                </p>
                <p>
                You can even take a step ahead and plan your entire week before the week begins. This way your Mondays won’t be manic and you won’t have to face any ‘midweek madnesses’. Creately provides multiple week planner templates for you to get a head start.
                </p>
            </div>
           
            <div className='heading'>
            How to Visualize Great To-Do Lists
            </div>
           
            <div className='content'>
            Now that you are all set to begin visualizing your to-do list, let’s walk through the process.
            </div>

            <div className='title'>
            List Tasks According to Priority
            </div>

            <div className='content'>
            We used the Eisenhower Matrix to figure out the high-priority tasks. Refer to the tasks in the matrix and list them according to priority, on your to-do list. You can highlight the highest priority tasks so that they are easily identifiable at a glance. Make sure to add a deadline to each task.
            </div>

            <div className='title'>
            Have Different Lists for Different Work Categories
            </div>

            <div className='content'>
                <p>
                You may be required to complete tasks belonging to different projects, or they may be professional or personal responsibilities. For instance, planning the next month’s Facebook posts may come under social media tasks, and doing an analysis on your competitors may be a marketing strategy task. So you can have different categories to group tasks.
                </p>

                <p>
                Moreover, color coding these batches will help easily identify the different categories. Creately’s visual workspace includes multiple color palettes that you can use to create task batches.
                </p>

                <p>
                Keeping different categories on the to-do list will provide clarity on the workload. This way you won’t get mixed up between tasks.
                </p>

            </div>

            <div className='title'>
            Use Kanban boards to track progress
            </div>

            <div className='content'>
            A Kanban board is a great way to keep track of the progress you make. The list you created with different categories can be included under ‘to do’ and then moved to ‘in progress’ and ‘done’ lanes as and when you start and complete the work.
            </div>

            <div className='heading'>
            What You Do Is Who You Are?
            </div>

            <div className='content'>
            <p>
            When you are productive, you tend to cultivate a positive outlook on life. You feel proud of the contribution you are making and the efforts you put into accomplishing a task. To-do lists help organize yourself effectively. Practicing this strategy will undoubtedly make you successful as it enables you to discover your hidden potential by overcoming procrastination.
              </p>

              <p>
              However, it is also important to keep in mind that you can’t always control every aspect of your life. So keep in mind that it is okay to occasionally go off the beaten path and go with the flow. Value your time, be productive, and make it your mission to put your efforts into everything that you set out to do.
              </p>
            </div>
    </div>
    <Footer />
    </div>
  )
}
