![logo-via-logohub (2)](https://user-images.githubusercontent.com/32569307/66299433-362f8f80-e8fc-11e9-914d-c3cfb85054f9.png)

## EatWrite

EatWrite helps you to better understand the link between the food you eat and the way you feel.

## How Do You Use it?

1. The user records his/her daily intake by selecting foods from a pre-populated list or by adding additional food items.

2. The user logs his/her physical and mental state (symptoms and moods).

3. Then the user can see a graph showing his symptoms for a certain time period. By hovering/clicking on the graph the use can also see the foods he consumed on a certain date. This allows him/her to see how food, mood, and physical sensations relate.

![](https://media.giphy.com/media/7L3RWrFXiJiUg/source.gif)



## Yeah, but *how* does it actually work?

We have used React for the frontend, Express for the backend and PostgresSQL as our database. The database is currently hosted on Heroku. 

## The Advantages of Using React:

* We were able to reuse one component multiple times. For example, we have an icon for each of the moods the user can choose from, and each icon uses one MoodIcon component:

```html
<div className="wrapper">
        <div>
          <MoodIcon
            mood={mood}
            setMood={setMood}
            moodChosen="Thrilled"
            image=<img src="../../../../assets/tongue.png" />
          />
          <MoodIcon
            mood={mood}
            setMood={setMood}
            moodChosen="Concerned"
            image=<img src="../../../../assets/arrogant.png" />
          />
          <MoodIcon
            mood={mood}
            setMood={setMood}
            moodChosen="Sad"
            image=<img src="../../../../assets/sad.png" />
          />
        </div>
```
* We were able to use premade React components, such as a graph from [Canvas.js.](https://canvasjs.com/react-charts/)


## Our Working Process

#### Week 1 - The Design Week 

We used Figma to create a [prototype](https://www.figma.com/proto/DHeFDGoLKH8rVvH3Tu06Ax/main?node-id=40%3A2&scaling=scale-down) of our app and then showed the prototype to potential users in order to receive their feedback and to adjust our features and design accordingly.

#### Week 2 & 3 - Sprint One & Sprint Two

That's when the actual code was written. Each team member (Ayah & Kira) worked on a separate feature(s), in order to allow both of us to perform diverse tasks and contribute both to the frontend and the backend. 

## What We've Learned

* How to connect React and Express

* Gained experience working with React, writing components and re-using them

* How to use third-party libraries to find applicable React components and adjust those components to fit our specific needs (+ troubleshooting)

## What We Would Like to Accomplish in the Future

* Currently, the user can add his moods and then see them represented on a graph. The original plan was to allow the user to also log in his moods and his physical symptoms. Those logging in functionalities will be based on the code we have already written.

* Make the app look better on bigger screens (our initial intention was to follow the mobile-first approach)









