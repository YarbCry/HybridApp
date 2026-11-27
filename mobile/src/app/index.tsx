import '@/global.css';

import { useState } from 'react';
import { Pressable, ScrollView, Text, View, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { lessons, upcomingLessons } from '@/lessons';

const WIDE = 900;

export default function LessonsScreen() {
  const { width } = useWindowDimensions();
  const wide = width >= WIDE;

  const [lessonId, setLessonId] = useState(lessons[0].id);
  const [exampleId, setExampleId] = useState<string | null>(null);

  const lesson = lessons.find((l) => l.id === lessonId)!;
  // Wide layout always shows an example; narrow layout shows the list until one is tapped.
  const example = lesson.examples.find((e) => e.id === exampleId) ?? (wide ? lesson.examples[0] : undefined);

  const pickLesson = (id: number) => {
    setLessonId(id);
    setExampleId(null);
  };

  const header = (
    <View>
      <Text className="text-xs font-bold uppercase text-emerald-700" style={{ letterSpacing: 2 }}>
        HybridApp
      </Text>
      <Text className="text-4xl font-bold text-slate-900" style={{ marginTop: 6 }}>
        Lessons
      </Text>
      <Text className="text-base text-slate-500" style={{ marginTop: 6 }}>
        Pick a lesson, then an example.
      </Text>
    </View>
  );

  const pills = (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
      {lessons.map((l) => {
        const active = l.id === lessonId;
        return (
          <Pressable
            key={l.id}
            accessibilityRole="button"
            onPress={() => pickLesson(l.id)}
            style={{
              backgroundColor: active ? '#047857' : '#e2e8f0',
              paddingHorizontal: 18,
              paddingVertical: 10,
              borderRadius: 999,
            }}>
            <Text style={{ color: active ? '#fff' : '#334155', fontWeight: '600' }}>Lesson {l.id}</Text>
          </Pressable>
        );
      })}
      {upcomingLessons.map((n) => (
        <View
          key={n}
          style={{
            backgroundColor: '#f1f5f9',
            paddingHorizontal: 18,
            paddingVertical: 10,
            borderRadius: 999,
            borderWidth: 1,
            borderStyle: 'dashed',
            borderColor: '#cbd5e1',
          }}>
          <Text style={{ color: '#94a3b8', fontWeight: '600' }}>Lesson {n} · soon</Text>
        </View>
      ))}
    </View>
  );

  const exampleList = (
    <View style={{ gap: 10 }}>
      {lesson.examples.map((e, i) => {
        const active = wide && example?.id === e.id;
        return (
          <Pressable
            key={e.id}
            accessibilityRole="button"
            onPress={() => setExampleId(e.id)}
            style={({ pressed }) => ({
              flexDirection: 'row',
              alignItems: 'center',
              gap: 14,
              backgroundColor: active ? '#ecfdf5' : pressed ? '#f1f5f9' : '#fff',
              borderWidth: 1,
              borderColor: active ? '#6ee7b7' : '#e2e8f0',
              borderRadius: 14,
              padding: 12,
            })}>
            <View
              style={{
                width: 34,
                height: 34,
                borderRadius: 10,
                backgroundColor: active ? '#047857' : '#d1fae5',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{ color: active ? '#fff' : '#047857', fontWeight: '700' }}>{i + 1}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text className="text-base font-semibold text-slate-900">{e.title}</Text>
              {!wide && (
                <Text className="text-sm text-slate-500" style={{ marginTop: 2 }}>
                  {e.description}
                </Text>
              )}
            </View>
            {!wide && <Text style={{ color: '#94a3b8', fontSize: 22 }}>›</Text>}
          </Pressable>
        );
      })}
    </View>
  );

  const exampleView = example && (
    <View>
      {!wide && (
        <Pressable accessibilityRole="button" onPress={() => setExampleId(null)} style={{ marginBottom: 16 }}>
          <Text className="font-semibold text-emerald-700">‹ Back to Lesson {lesson.id}</Text>
        </Pressable>
      )}
      <Text style={{ fontSize: 12, fontWeight: '700', color: '#047857', letterSpacing: 1.5 }}>
        LESSON {lesson.id} · {lesson.title.toUpperCase()}
      </Text>
      <Text className="text-3xl font-bold text-slate-900" style={{ marginTop: 6 }}>
        {example.title}
      </Text>
      <Text className="text-base text-slate-500" style={{ marginTop: 4, marginBottom: 24 }}>
        {example.description}
      </Text>
      <example.Component />
    </View>
  );

  if (wide) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f8fafc' }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <ScrollView
            style={{ width: 340, flexGrow: 0, borderRightWidth: 1, borderRightColor: '#e2e8f0', backgroundColor: '#fff' }}
            contentContainerStyle={{ padding: 24, gap: 24 }}>
            {header}
            {pills}
            <View style={{ height: 1, backgroundColor: '#e2e8f0' }} />
            <Text className="text-lg font-bold text-slate-900">{lesson.title}</Text>
            {exampleList}
          </ScrollView>
          <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 40 }}>
            {exampleView}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f8fafc' }}>
      <ScrollView contentContainerStyle={{ padding: 20, gap: 20 }}>
        {header}
        {pills}
        <View style={{ height: 1, backgroundColor: '#e2e8f0' }} />
        {example ? (
          exampleView
        ) : (
          <View style={{ gap: 12 }}>
            <Text className="text-xl font-bold text-slate-900">{lesson.title}</Text>
            {exampleList}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
