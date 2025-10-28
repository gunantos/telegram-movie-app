import React from 'react'
import { Container, Grid, Tabs, TextInput, Select, Group } from '@mantine/core'
import MovieCard from './MovieCard'

const MovieGridMantine = ({ movies = [], isLoading, activeTab, setActiveTab, search, setSearch, sort, setSort, date, setDate }) => {
  return (
    <Container size="xs" px="md">
      <Tabs value={activeTab} onChange={setActiveTab} variant="pills" radius="md" keepMounted={false}>
        <Tabs.List grow>
          <Tabs.Tab value="shorts">Shorts</Tabs.Tab>
          <Tabs.Tab value="film">Film</Tabs.Tab>
          <Tabs.Tab value="series">Series</Tabs.Tab>
          <Tabs.Tab value="cartoon">Cartun</Tabs.Tab>
        </Tabs.List>
      </Tabs>

      <Group mt="md" mb="md" align="stretch" wrap="wrap">
        <TextInput
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          placeholder="Cari judul..."
          leftSection={<span role="img" aria-label="search">🔎</span>}
          style={{ flex: 1, minWidth: 180 }}
        />
        <Select
          value={sort}
          onChange={setSort}
          data={[
            { value: 'views_desc', label: 'Views terbanyak' },
            { value: 'views_asc', label: 'Views terendah' },
            { value: 'date_desc', label: 'Terbaru' },
            { value: 'date_asc', label: 'Terlama' }
          ]}
          style={{ width: 200 }}
        />
        <Select
          value={date}
          onChange={setDate}
          data={[
            { value: 'any', label: 'Semua waktu' },
            { value: '24h', label: '24 jam terakhir' },
            { value: '7d', label: '7 hari terakhir' },
            { value: '30d', label: '30 hari terakhir' }
          ]}
          style={{ width: 200 }}
        />
      </Group>

      <Grid gutter="md">
        {movies.map((m) => (
          <Grid.Col key={m.id} span={{ base: 6, sm: 2, md: 3, lg: 4, xl: 6 }}>
            <MovieCard movie={m} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  )
}

export default MovieGridMantine
