import EventList from '@/components/events/EventList';
import EventsSearch from '@/components/events/EventsSearch';
import { getAllEvents } from '@/helpers/api-util';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

function EventsPage({ events }) {
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <div>
      <Head>
        <title>All Events</title>
        <meta name="description" content="Find a lot of great events that allow you to evolve" />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList events={events} />
    </div>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events,
    },
    revalidate: 60,
  };
}

export default EventsPage;
