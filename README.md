# Final Report: GoLocal


<h4>Problem & Related Work (P1)</h4>

The problem this website attempts to solve is the barrier between travelers and local experiences. When people travel, it can be difficult to separate touristy information or information advertised by large corporations from knowledge about authentic experiences from local experts. This is an important problem to solve because there is a huge fraction of travelers that travel with the desire to immerse themselves in the local environment and community, but don’t have the resources to do so.

Current solutions to this problem are sites like TripAdvisor and Yelp, but ultimately, they contribute to the overall problem. While they do provide a wealth of information about locations in a user friendly way, the setup of their sites has led to information inflation, unreliable information, and touristy recommendations. Our website aims to improve on these models by limiting information about a location to only information that comes from locals of that area. This will prevent the majority of information sharing from tourists and large corporations.


<h4>User Research (P2 & P3)</h4>

For our research, we decided to conduct contextual inquiries. Essentially, we asked the participants to pick somewhere they are interested in traveling, then plan at least one meal and one activity for their trip.

In general, we found that users need lots of images, information that is not “touristy”, and information all in one place. With this, the goals for our app include providing strong visuals with information presented, information only from local sources, and the ability to research different categories of travel all in one place (for example, food, activities, and nightlife).

Some user types we envision using the app are: people in their 20s who travel for work and want to experience the local community in the places they visit; older, long time residents of an area who enjoy sharing their local expertise and connecting with travelers; frequent travelers who enjoy immersing themselves in the authentic culture of exotic places they travel to; and new residents, seeking to learn about their new home and connect with other residents.


<h4>Paper Prototyping (P4)</h4>

[Paper prototyping video](https://drive.google.com/file/d/1_Vjex8KLV-OheGUEYCiYnoGs1n_50PBe/view?usp=sharing)

Overall, we received very positive feedback from our testers about the concept of GoLocal. However, we identified several usability issues. Primarily, we found that users of the website wanted to search for their destination immediately, without having to input extensive information about their local area first. We also identified several confusing and redundant buttons that we eliminated or restructured in our computer prototype. We also found that the layout of the main location page was somewhat confusing for users to find what they were looking for, so we tried to simplify that layout in the computer prototype.

As a result of this feedback, we made several significant design decisions in addition to smaller UI improvements. One change we made was to allow users to view information on the website without having to complete an extensive profile first. Additionally, we consolidated several of the messaging and posting buttons so that it is more clear to users which buttons have what functionality.


<h4>High-Fidelity Prototyping (P5, P6, & P7)</h4>

Task 1: Viewable profiles with ability to post, edit, and delete favorite restaurants, activities, etc.<br>
![screenshot](/images/screenshots/profile.png "screenshot")
<br>

Task 2: Location pages with selected events, profiles, restaurants, night life, etc. with filter functionality and more expanded information for each item<br>
![screenshot](/images/screenshots/main-page.png "screenshot")

Task 3: Like/dislike feature for specific items on a location page<br>
![screenshot](/images/screenshots/like.png "screenshot")

Task 4: Messaging platform to allow travelers to ask locals questions about the area<br>
![screenshot](/images/screenshots/message.png "screenshot")

Task 5: “Favorite” functionality to store items the user wants to save<br>
![screenshot](/images/screenshots/favorites.png "screenshot")

Component 1: User Profiles: We implemented user profiles where users can login or sign up, edit their own profile, ask questions on other users’ profiles, and display and view information about people’s favorite things in an area.<br>
Component 2: Social Interaction: We implemented the ability to like or dislike, comment on, or ask questions about individual items in an area on a location page.<br>
Component 3: Interactive Data Filter: We implemented a data filter on the main location page, so that users can sort the results that appear on the page based on tags they choose to add to their filter using a search bar.


<h4>Reflection</h4>

Over the past several weeks, we have implemented a prototype that would allow users to make a profile, add information about their local area, view, filter, and save information about another location, and participate in social interactions.

If we had more time, the next big step would be to implement a functional back end to store and manage all of the information the interface is intended to display. All of the information was input manually by our team, but we would like to add functionality so that users’ input for their profiles would update the main location page. Also, we currently only support one location, Del Mar. A next step would be to add a “Go Local” page when you log in, where you could search for any location, anywhere, and get some sort of results (the search bar in the header is for this purpose, but it’s not functional).


<h4>Links</h4>

[Link to GitHub repo](https://github.com/cs-330-GoLocal/go-local)

[Link to prototype](https://cs-330-golocal.github.io/go-local/login.html)


Our prototype is best viewed on Chrome. We recommend starting on the login page and logging in using “user1” and “pass1”, which will take you to your profile. Using the My Trip button with the suitcase icon in the top right corner, you can navigate to the main location page, which from there you can explore the other features of the site.
